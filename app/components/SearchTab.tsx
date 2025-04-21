import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchFilter from "./SearchFilter";
import StayInfoForm from "./StayInfoForm";

export function SeacrhTab() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-transparent">
        <TabsTrigger value="home" className="hover:bg-zinc-100">
          Home
        </TabsTrigger>
        <TabsTrigger value="experiences" className="hover:bg-zinc-100">
          Experiences
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <StayInfoForm />
      </TabsContent>
      <TabsContent value="experiences"></TabsContent>
    </Tabs>
  );
}
