export const inputs = [
  { type: "text", name: "company", label: "Company Name", required: true },
  { type: "text", name: "job", label: "Job Title", required: true },
  { type: "number", name: "salary", label: "Salary" },
  {
    type: "select",
    name: "status",
    label: "Status",
    options: ["Saved", "Applied", "Interview", "Offer", "Rejected"],
    required: true,
  },
  {
    type: "select",
    name: "format",
    label: "Work Format",
    options: ["Remote", "Hybrid", "Office"],
    required: true,
  },
  { type: "text", name: "note", label: "Note" },
  { type: "url", name: "link", label: "Link" },
];
