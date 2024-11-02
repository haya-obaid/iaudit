import { Input } from "./Input";

export default function ClientAddressForm() {
  return (
    <form className="py-6 flex gap-4 flex-wrap">
      <Input placeholder="Address1" htmlFor="address1" />
      <Input placeholder="Address2" htmlFor="address2" />
      <Input placeholder="P.O.box" htmlFor="p.o" />
      <Input placeholder="City" htmlFor="city" />
      <Input placeholder="John Smith" htmlFor="name" />
    </form>
  );
}