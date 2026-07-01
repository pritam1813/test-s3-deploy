'use server';

export interface FormState {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    experience?: string[];
  };
}

export async function subscribeToNewsletter(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate network/database delay for visual transition feedback
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const experience = formData.get('experience') as string;

  const errors: Record<string, string[]> = {};

  if (!name || name.trim().length < 2) {
    errors.name = ['Name must be at least 2 characters long.'];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['Please enter a valid email address.'];
  }

  if (!experience || experience === '') {
    errors.experience = ['Please select your experience level.'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the errors in the form.',
      errors,
    };
  }

  return {
    status: 'success',
    message: `Thank you, ${name}! You've successfully subscribed to the Nature Explorers Newsletter with your email (${email}) as a ${experience}.`,
  };
}
