import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DesignPreferences = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-playfair font-semibold text-primary">
        Design Preferences
      </h2>
      
      <div className="space-y-2">
        <Label htmlFor="colorPreferences">Color Preferences</Label>
        <Input 
          id="colorPreferences" 
          name="colorPreferences"
          placeholder="e.g., Soft ivory, dusty rose, sage green..."
          className="h-12"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="sizeRequirements">Size Requirements</Label>
        <Input 
          id="sizeRequirements" 
          name="sizeRequirements"
          placeholder="e.g., Standard adult shawl, newborn blanket 30x40..."
          className="h-12"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="personalization">Personalization & Embroidery Details</Label>
        <Textarea 
          id="personalization" 
          name="personalization"
          placeholder="Hand embroidery, machine embroidery, or both? Include details about beloved pets, family crests, names, dates, or custom artwork you'd like featured..."
          className="min-h-32"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="embroideryType">Embroidery Preference</Label>
        <Select name="embroideryType">
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select your preferred embroidery style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hand-embroidery">Hand Embroidery (Traditional Craftsmanship)</SelectItem>
            <SelectItem value="machine-embroidery">Machine Embroidery (Precise Details)</SelectItem>
            <SelectItem value="both">Both Hand & Machine Embroidery</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DesignPreferences;