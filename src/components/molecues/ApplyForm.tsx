'use client';

import {Loader2, Paperclip} from 'lucide-react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';

import {createCandidate, uploadToR2} from '~server/r2';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {Input} from '~/components/ui/input';

export const formSchema = z.object({
    fullname: z.string().min(2).max(50),
    email: z.string(),
    phone: z.string(),
    linkedIn: z.string(),
    message: z.string().optional(),
});

const ApplyForm = ({jobName}: {jobName: string}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            linkedIn: '',
            message: '',
        },
    });

    const [file, setFile] = useState<File>();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const currentFile = event.target.files[0];
            setFile(currentFile);
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            if (file) {
                console.log(values);
                const data = new FormData();
                data.append('file', file);

                await uploadToR2(data);
            }
            await createCandidate(values, jobName, file ? file.name : 'No cv');
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        form.reset();
    }, [form.formState.isSubmitted]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full bg-white rounded-lg shadow-lg p-8 flex gap-4 flex-col sticky top-[96px] border border-mainBlue border-opacity-15"
            >
                <div className="text-3xl font-semibold">
                    {'Apply for this position.'}
                </div>
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>{'Fullname'}</FormLabel>
                            <FormControl>
                                <Input placeholder="Fullname" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>{'Email'}</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>{'Phone'}</FormLabel>
                            <FormControl>
                                <Input placeholder="Phone" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="linkedIn"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>{'LinkedIn'}</FormLabel>
                            <FormControl>
                                <Input placeholder="LinkedIn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>{'Message'}</FormLabel>
                            <FormControl>
                                <Input placeholder="Message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-600 focus-within:ring-offset-1 hover:text-indigo-500"
                >
                    <span className="flex gap-2 items-center">
                        <Paperclip className="w-4 h-4" />
                        {file ? file.name : 'Upload a file'}
                    </span>
                    <input
                        type="file"
                        accept="application/pdf"
                        id="file-upload"
                        name="file-upload"
                        className="sr-only"
                        onChange={handleFileChange}
                    />
                </label>
                <button
                    className={`text-white ${
                        form.formState.isSubmitted ? 'bg-[#00ff00]' : 'bg-mainBlue'
                    } px-3 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition-all`}
                >
                    {form.formState.isSubmitting && (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                    {'Send'}
                </button>
            </form>
        </Form>
    );
};

export default ApplyForm;
