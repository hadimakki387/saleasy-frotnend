import CustomImage from "@/components/global/CustomImage";
import { getAction, getActionMore, renderImage } from "@/services/table-utils";
import { ColumnGetter } from "@/services/types copy";

export const ItemsColumn: ColumnGetter = ({ onActionClick }) => {
  return [
    {
      field: "id",
      headerName: "#",
      flex: 0.5,
    },
    {
      field: "image",
      headerName: "IMAGE",
      flex: 1,
      renderCell: (params) => {
        return renderImage(params, false);
      },
    },
    {
      field: "name",
      headerName: "ITEM NAME",
      flex: 1,
      textTransform: "uppercase",
    },
    {
      field: "createdAt",
      headerName: "CREATED AT",
      flex: 1,
    },
    {
      field: "updatedAt",
      headerName: "UPDATED AT",
      flex: 1,
    },

    {
      field: "more",
      headerName: "",
      renderCell: (params) =>
        getActionMore({
          params,
          onActionClick,
          buttons: [
            {
              id: "edit",
              name: "Edit",
              className: "text-black-500",
            },
            {
              id: "delete",
              name: "Delete",
              className: "text-red-500",
            },
          ],
        }),
      flex: 0.2,
      sortable: false,
    },
  ];
};
