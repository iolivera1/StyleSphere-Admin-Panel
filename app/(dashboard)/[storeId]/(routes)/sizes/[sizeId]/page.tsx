import prismadb from "@/lib/prismadb";

import { SizeForm } from "./components/size-form";

export default async function SizePage({
  params,
}: {
  params: { sizeId: string };
}) {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-6 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}
