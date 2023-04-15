type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-screen w-full flex flex-column p-component text-color surface-ground">
      {children}
    </div>
  );
}
