import type { ReactNode } from 'react';
import { useAppForm } from './use-app-form';

type AppFormInstance = ReturnType<typeof useAppForm>;

export function Form({
  form,
  children,
  className,
}: {
  form: AppFormInstance;
  children: ReactNode;
  className?: string;
}): React.JSX.Element {
  return (
    <form.AppForm>
      <form
        className={className ?? 'space-y-4'}
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void form.handleSubmit();
        }}
      >
        {children}
      </form>
    </form.AppForm>
  );
}
