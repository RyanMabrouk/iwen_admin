"use client";
import { useToast } from "@/components/ui/use-toast";
import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletesubcategory() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const url = getEndpoint({ resourse: "subcategories", action: "deleteSubCategory" });
      const { error } = await CRUDData({
        method: "DELETE",
        url: url(id),
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subcategories"] });
      toast({
        title: "نجاح!",
        description: "تمت الإزالة بنجاح.",
      });
    },
    onError: (error) => {
      toast({
        title: "خطأ",
        description: `حدث خطأ أثناء الحذف: ${error.message}`,
      });
    },
  });
}
