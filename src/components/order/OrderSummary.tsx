import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/contexts/CurrencyContext";

interface OrderSummaryProps {
  formData: any;
}

const OrderSummary = ({ formData }: OrderSummaryProps) => {
  const { formatPrice } = useCurrency();
  
  return (
    <Card className="luxury-card border-0">
      <CardContent className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
          Order Summary
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Deposit Required</span>
            <Badge variant="secondary">{formatPrice(50)}</Badge>
          </div>
          
          {formData.productType && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Product Type</span>
              <span className="text-sm font-medium">{formData.productType}</span>
            </div>
          )}
          
          {formData.budget && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Budget Range</span>
              <span className="text-sm font-medium">{formData.budget}</span>
            </div>
          )}
          
          {formData.timeline && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Target Date</span>
              <span className="text-sm font-medium">
                {new Date(formData.timeline).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Your {formatPrice(50)} deposit will be applied to the final order total. 
            Final pricing will be provided within 24 hours.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;