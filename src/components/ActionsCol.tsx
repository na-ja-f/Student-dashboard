import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import CountDownTimer from "./CountDownTimer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ActionsCol({
  item,
  onBookingToggle,
}: {
  item: any;
  onBookingToggle: (id: number) => void;
}) {
  const handleConfirmClick = () => {
    onBookingToggle(item.id);
  };

  return (
    <div className="items-center">
      {item.isLive && (
        <Button variant="secondary">
          <>
            {"Join now"}
            <ExternalLink width={15} height={15} strokeWidth={3} />
          </>
        </Button>
      )}
      {!item.isLive && !item.isBooked && (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Book now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] sm:max-h-[207px]">
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary" onClick={handleConfirmClick}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      {!item.isLive && item.isBooked && <CountDownTimer />}
    </div>
  );
}

export default ActionsCol;
