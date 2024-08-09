import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ClassNameCol from "./ClassNameCol";
import StaffNameCol from "./StaffNameCol";
import ActionsCol from "./ActionsCol";

function ClassList({
  classes,
  onBookingToggle,
}: {
  classes: any;
  onBookingToggle: (id: number) => void;
}) {
  return (
    <Table>
      <TableHeader className="bg-[#F6F6F6]">
        <TableRow className="text-xs font-medium text-[#5F5F61]">
          <TableHead>Class name</TableHead>
          <TableHead>Staff name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classes.map((item: any, index: number) => (
          <TableRow key={item.id} className={item.isLive && "border-b"}>
            <TableCell>
              <ClassNameCol item={item} index={index} />
            </TableCell>
            <TableCell>
              <StaffNameCol item={item} />
            </TableCell>
            <TableCell>
              <ActionsCol item={item} onBookingToggle={onBookingToggle} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ClassList;
