import { TextLink } from '@/components/atoms/TextLink/TextLink';
import { AuthForm } from '@/components/molecules/AuthForm/AuthForm';
import type { AuthFormType } from '@/components/molecules/AuthForm/AuthForm.schema';
import { AuthWrapper } from '@/components/molecules/AuthWrapper/AuthWrapper';
import authClient from '@/services/authApi';
import { Layout } from '../Layout';

export const SignUp = () => {
  const [signUp, signUpResult] = authClient.useSignUpMutation();

  const createAccount = (formData: AuthFormType) => {
    signUp(formData);
  };

  return (
    <Layout>
      <section className="text-primary flex w-full flex-1 items-center justify-center bg-white px-4 md:p-0 dark:bg-black dark:text-white">
        <AuthWrapper>
          <div className="flex flex-col items-center gap-2 pb-4">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-semibold text-sm text-neutral-600 dark:text-neutral-200">{`Let's get started with your 30 days free trial`}</p>
          </div>

          <AuthForm
            submitButtonLabel="Create an account"
            onSubmitHandler={createAccount}
            isLoading={signUpResult.isLoading}
            hasTermsAndPrivacyLegend={true}
          />

          <p className="text-semibold pt-4 text-center text-sm text-neutral-600 dark:text-neutral-200">
            Already have an account? <TextLink to="/login">Sign in</TextLink>
          </p>
        </AuthWrapper>
      </section>
    </Layout>
  );
};
