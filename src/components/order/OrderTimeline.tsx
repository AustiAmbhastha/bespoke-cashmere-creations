import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrency } from "@/contexts/CurrencyContext";

const OrderTimeline = () => {
  const { currency, formatPrice } = useCurrency();
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-playfair font-semibold text-primary">
        Timeline & Investment
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="timeline">Desired Completion Date</Label>
          <Input id="timeline" name="timeline" type="date" className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select name="budget">
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select your investment range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="200-400">{formatPrice(200)} - {formatPrice(400)}</SelectItem>
              <SelectItem value="400-600">{formatPrice(400)} - {formatPrice(600)}</SelectItem>
              <SelectItem value="600-900">{formatPrice(600)} - {formatPrice(900)}</SelectItem>
              <SelectItem value="900-1200">{formatPrice(900)} - {formatPrice(1200)}</SelectItem>
              <SelectItem value="discuss">Prefer to discuss</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default OrderTimeline;