'use server';

import {z} from 'zod';
import {sql} from '@vercel/postgres';
import {revalidatePath} from 'next/cache';

const FormSchema = z.object({
    id : z.string(),
    customerId : z.string(),
    amount : z.coerce.number(), //coerce == change
    status : z.enum(['panding', 'paid']),
    date : z.string(),
});

const CreateInvoice = FormSchema.omit({id : true, date : true});

export async function createInvoice(formData: FormData){
    const {customerId, amount, status} = CreateInvoice.parse({
        customerId : formData.get('customerId'),
        amount : formData.get('amount'),
        status : formData.get('status')
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0]; // splite time for only use date

    await sql`
        insert into invoices (customer_id, amount, status, date)
        values (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    
    revalidatePath('/dashboard/invoices');
}