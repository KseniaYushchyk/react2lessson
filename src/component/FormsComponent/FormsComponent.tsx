import React, {FC} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormProps {
    title: string,
    body: string,
    userId: number
}

const FormsComponent:FC = () => {

    const {handleSubmit,
           register,
           formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode:'all'
    });

    const customHandler: SubmitHandler<IFormProps> = async (formDataProps) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataProps)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Post created successfully:', data);
            } else {
                console.error('Error creating post:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
            <label><input type='text' {...register('title', {
                required: true,
                minLength: {value:1, message:'Title must be written'}
            })}/>
                {errors.title && <div>{errors.title.message}</div>}
            </label>
                <label><input type='text' {...register('body')}/></label>
            <label><input {...register('userId', {
                required: true,
                valueAsNumber: true,
                min: {value:1, message:"User id can't be less than 1"}
            })}/>
                {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            <button disabled={!isValid}>CREATE POST</button>
            </form>
        </div>
    );
};

export default FormsComponent;