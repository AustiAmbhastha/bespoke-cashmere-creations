import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ContactInformation = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-playfair font-semibold text-primary">
        Contact Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required className="h-12" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;