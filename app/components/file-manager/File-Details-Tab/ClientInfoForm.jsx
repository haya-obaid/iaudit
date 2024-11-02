import { Input } from "./Input";

export default function ClientInfoForm() {
  return (
    <form className="py-6 flex flex-col gap-4">
      <Input label="Client ID" placeholder="Client ID" htmlFor="clientId" />
      <Input
        label="Client name"
        placeholder="Client name"
        htmlFor="clientname"
      />
      <Input label="Email" placeholder="Email" htmlFor="email" />
      <Input label="Phone" placeholder="Phone" htmlFor="phone" />
      <Input label="Ext number" placeholder="Ext number" htmlFor="number" />
      <Input label="Fax" placeholder="Fax" htmlFor="fax" />
      <Input label="Website" placeholder="Website" htmlFor="website" />
    </form>
  );
}

