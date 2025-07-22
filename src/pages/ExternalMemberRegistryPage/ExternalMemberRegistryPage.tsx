import { ExternalMemberRegistryForm } from "@/components/ExternalMemberRegistryForm/ExternalMemberRegistryForm";
import { PageTitle } from "@/components/PageTitle/PageTitle";

const ExternalMemberRegistryPage: React.FC = () => {
   return (

        <div className="pageContainer">
            <div className="pageContent">
                <PageTitle showShield={true} title="Cadastro de Membro Externo"/>
                <ExternalMemberRegistryForm />
            </div>
        </div>
   ) 
}



export default ExternalMemberRegistryPage;