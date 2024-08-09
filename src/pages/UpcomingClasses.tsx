// classes listing component
import ClassList from "@/components/ClassList";
import { classData } from "@/data/classes";
import { useEffect, useState } from "react";
import ClassListHeader from "@/components/ClassListHeader";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function UpcomingClasses() {
  // state for storing the Class Data & toggler for filtering
  const [classes, setClasses] = useState(classData);
  const [isFiltered, setIsFiltered] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const classesPerPage = 6; // Number of classes to display per page

  // Calculate total pages
  const totalPages = Math.ceil(classes.length / classesPerPage);

  // filter data based on the change in isFiltered state
  useEffect(() => {
    if (isFiltered) {
      const filteredClasses = classData.filter(
        (classItem) => classItem.isBooked === true
      );
      setClasses(filteredClasses);
    } else {
      setClasses(classData);
    }

    setCurrentPage(1); // Reset to first page when filtering
  }, [isFiltered]);

  // Get the current classes to display
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = classes.slice(indexOfFirstClass, indexOfLastClass);

  // Callback function for changing the isBooked part of an item to a timer
  // this function is passed to change Book now Button to Timer
  const handleBookingToggle = (id: number) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) =>
        cls.id === id ? { ...cls, isBooked: !cls.isBooked } : cls
      )
    );
  };

  // function set the current page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-[606px] ml-7 rounded-lg bg-white p-[18px]">

      {/* header on top of classes table including booked only filter */}
      <ClassListHeader isFiltered={isFiltered} setIsFiltered={setIsFiltered} />

      {/* classes table */}
      <ClassList
        classes={currentClasses}
        onBookingToggle={handleBookingToggle}
      />

      {/* shadcn code for pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className={currentPage === 1 ? "disabled" : ""}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              className={currentPage === totalPages ? "disabled" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default UpcomingClasses;
