import AcademicsRequestsList from "../../components/AcademicsRequestsList/AcademicsRequestsList.tsx"
// import { PageTitle } from "@/components/PageTitle/PageTitle.tsx";

const AcademicsRequestsPage: React.FC = () => 
{
    return (
        
        <div className="pageContainer">
            {/* <div className="pageContent"> */}
                {/* <PageTitle showShield={false} title="Requisições de Alunos" /> */}
                <AcademicsRequestsList />
            {/* </div> */}
        </div>
    )
}
export default  AcademicsRequestsPage; 