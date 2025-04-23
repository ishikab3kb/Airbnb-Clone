import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StayInfoForm from "./StayInfoForm";

export function SeacrhTab() {
  return (
    <Tabs
      defaultValue="account"
      className="w-full flex flex-col justify-center items-center"
    >
      <TabsList className="grid grid-cols-2 bg-transparent">
        <TabsTrigger value="home" className="hover:bg-zinc-100">
          Home
        </TabsTrigger>
        <TabsTrigger value="experiences" className="hover:bg-zinc-100">
          Experiences
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="items-center">
        <StayInfoForm />
      </TabsContent>
      <TabsContent value="experiences"></TabsContent>
    </Tabs>
  );
}
