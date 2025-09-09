import { TextLink } from '@/components/atoms/TextLink/TextLink';
import { AuthForm } from '@/components/molecules/AuthForm/AuthForm';
import { AuthWrapper } from '@/components/molecules/AuthWrapper/AuthWrapper';
import { Layout } from '../Layout';

export const SignIn = () => {
  return (
    <Layout>
      <section className="text-primary flex w-full flex-1 items-center justify-center bg-white px-4 md:p-0 dark:bg-black dark:text-white">
        <AuthWrapper>
          <div className="flex flex-col items-center gap-2 pb-4">
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-semibold text-sm text-neutral-600 dark:text-neutral-200">
              Enter your credentials to access your account.
            </p>
          </div>

          <AuthForm
            submitButtonLabel="Login"
            onSubmitHandler={() => {}}
            hasForgotPassword={true}
          />

          <p className="text-semibold pt-4 text-center text-sm text-neutral-600 dark:text-neutral-200">
            {`Don't have an account? `}
            <TextLink to="/signup">Create an account</TextLink>
          </p>
        </AuthWrapper>
      </section>
    </Layout>
  );
};
