import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProductSelection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-playfair font-semibold text-primary">
        Product Selection
      </h2>
      
      <div className="space-y-2">
        <Label htmlFor="productType">Product Type *</Label>
        <Select name="productType" required>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select the type of item you'd like to commission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bespoke-shawl">Bespoke Shawl</SelectItem>
            <SelectItem value="baby-blanket">Custom Baby Blanket</SelectItem>
            <SelectItem value="baby-clothes">Personalized Baby Clothes</SelectItem>
            <SelectItem value="custom-request">Custom Request (Please specify)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductSelection;