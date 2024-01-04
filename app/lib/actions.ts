'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
// revalidatePath : clear client-side router cache and trigger a new request to the server
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// For authentification
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),

  //invalied_type_error is throws an error if the field empty.
  customerId: z.string({
    invalid_type_error: "Please select a customer."
  }),

  //gt always want the amount greater than 0 with the .gt() function.
  amount: z.coerce.number().gt(0, {
    message: "Please enter an amount greater than $0"
  }), //coerce == change

  //add a friendly message if the user doesn't select a status.  
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});


export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
}

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  //safeParse will return an object containing either a success or error field.
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // handle validation of field error
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields, Failed to Create Invoice.'
    }
  }

  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0]; // splite time for only use date


  try {
    await sql`
        insert into invoices (customer_id, amount, status, date)
        values (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error : Failed to Create Invoice.'
    };
  }

  const thisPath = '/dashboard/invoices';
  revalidatePath(thisPath);
  //redirect to the origin path
  redirect(thisPath);
}


// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData
) {

  const validatedField = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  })

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: 'Missing Fields, Failed to Update Invoice'
    }
  }

  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: 'Database Error : Fail to update invoice'
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');

  // Unreachable code block
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice' };
  }
}

// [2024-01-04] Reference URL : https://nextjs.org/learn/dashboard-app/adding-authentication#authentication-vs-authorization
// [2024-01-04] NextAuth.js error Documentation Url : https://authjs.dev/reference/core/errors/
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // credentials = 자격증명
    // Using mode of credentials in signIn library
    await signIn('credentials', formData);
  }
  catch (error) {
    //If make of the authentification Error
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something went wrong."
      }
    }
    throw error;
  }
}
