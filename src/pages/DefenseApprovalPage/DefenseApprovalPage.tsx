import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AcademicBadge from "../../components/AcademicBadge/AcademicBadge";
import AttatchmentCard from "@/components/AttatchmentCard/AttatchmentCard";
import BoardMemberCard from "@/components/BoardMemberCard/BoardMemberCard";

// Would idealy use z.infer from zod with the defense request type
import { mockData, type mockDefense } from "./mockDefense.ts";

type Props = {
  data: mockDefense;
}

const DefenseApprovalPage: React.FC<Props> = ({ data = mockData }) => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Card className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Header Info */}
          <section>
            <AcademicBadge title={"mestrando"}/>
            <h2 className="text-2xl font-bold mt-2">{data.student}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-6">
              <div>
                <p>Modalidade de Defesa</p>
                <p>{data.defenseModality}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">
              <div>
                <p>Data</p>
                <p>{data.date.toISOString().split("T")[0]}</p>
              </div>
              <div>
                <p>Horário</p>
                <p>{data.time}</p>
              </div>
              <div>
                <p>Bloco</p>
                <p>{data.block}</p>
              </div>
              <div>
                <p>Sala</p>
                <p>{data.room}</p>
              </div>
              <div>
                <p>Link</p>
                <p>{data.link}</p>
              </div>
            </div>
          </section>

          {/* Anexos */}
          <Card>
            <CardHeader><CardTitle>Anexos</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {/* File mockup */}
                {data.attatchments.map(attatchment => (
                  <AttatchmentCard title="Dissertação" subTitle={attatchment.title} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Título da Dissertação */}
          <Card>
            <CardHeader><CardTitle>Título da Dissertação</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-2">{data.thesisTitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div><strong>Orientador(a)</strong>{data.advisor}</div>
                <div><strong>1º Coorientador(a)</strong>{data.coAdvisor1}</div>
              </div>
            </CardContent>
          </Card>

          {/* Banca Examinadora */}
          <Card>
            <CardHeader><CardTitle>Banca Examinadora</CardTitle></CardHeader>
            <CardContent>
              {data.boardMembers.map(member => (
                <BoardMemberCard
                  type={member.type}
                  name={member.name}
                  institution={member.institution}
                  title={member.title}
                />
              ))}
            </CardContent>
          </Card>

          {/* Feedback Textarea */}
          <Textarea placeholder="Feedback..." />

          {/* Footer Buttons */}
          <div className="flex justify-end gap-2">
            <Button variant="destructive">Rejeitar</Button>
            <Button variant="default">Aprovar</Button>
          </div>
        </Card>

      </div>
    </div>
  )
}
export default DefenseApprovalPage;