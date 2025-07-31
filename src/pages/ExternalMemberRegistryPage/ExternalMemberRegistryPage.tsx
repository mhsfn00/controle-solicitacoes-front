import { ExternalMemberRegistryForm } from "@/components/ExternalMemberRegistryForm/ExternalMemberRegistryForm";
import { PageTitle } from "@/components/PageTitle/PageTitle";

const ExternalMemberRegistryPage: React.FC = () => {
   return (
     <div className="max-w-3xl mx-auto">
       <PageTitle showShield={true} title="Cadastro de Membro Externo" />
       <ExternalMemberRegistryForm />
     </div>
   ); 
}



export default ExternalMemberRegistryPage;