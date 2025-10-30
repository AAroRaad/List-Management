import { useForm } from "react-hook-form";
import type { Item } from "../types/item";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, subtitle: string) => void;
  defaultValues?: Partial<Item>;
}

interface FormValues {
  title: string;
  subtitle: string;
}

const ItemModal = ({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
}: ItemModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: "", subtitle: "" },
  });

  const handleCancel = () => {
    reset({
      title: defaultValues?.title || "",
      subtitle: defaultValues?.subtitle || "",
    });
    onClose();
  };

  const submitHandler = (data: FormValues) => {
    onSubmit(data.title, data.subtitle);
    handleCancel();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {defaultValues ? "Edit Item" : "Create Item"}
              </h2>
              <IoCloseCircleOutline
                onClick={handleCancel}
                className="text-2xl text-red-500 cursor-pointer"
              />
            </div>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
              <div>
                <input
                  {...register("title", { required: "Title is required" })}
                  className="w-full border rounded-md p-2"
                  placeholder="Title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("subtitle", {
                    required: "Subtitle is required",
                  })}
                  className="w-full border rounded-md p-2"
                  placeholder="Subtitle"
                />
                {errors.subtitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subtitle.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  {defaultValues ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItemModal;
