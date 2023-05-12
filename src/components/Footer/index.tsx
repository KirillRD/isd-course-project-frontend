import { Divider } from 'primereact/divider';

export default function Footer() {
  return (
    <footer className="h-5rem w-full px-5">
      <Divider className="mb-3" />
      <div className="flex w-full justify-content-center">
        <div className="xl:col-6 lg:col-8 md:col-10 col-12">
          <span>© 2023 Itransition, Software development, Kirill Ryabov</span>
        </div>
      </div>
    </footer>
  );
}
