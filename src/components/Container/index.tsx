type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="w-full flex-grow-1 flex flex-column align-items-center">
      {children}
    </main>
  );
}
