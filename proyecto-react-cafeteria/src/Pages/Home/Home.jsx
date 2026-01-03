import { useEffect, useState } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { getProducts } from "@/services/api";

function Home() {
const [products, setProducts] = useState([]);

const handleGetProducts = async () => {
    const data = await getProducts();
    setProducts(data);
};

useEffect (() => {
    handleGetProducts();
}, []);

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <h1 className="text-2xl">Productos</h1>
            <pre>{JSON.stringify(products, null, 2)}</pre>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default Home;

// import { Cafeteria } from "@/components/cafeteria";

// function Home() {
//     return (
//         <div>
//                 <Cafeteria />
                
//         </div>
//     );
// }

// export default Home;
