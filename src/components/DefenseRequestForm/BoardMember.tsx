import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useFormContext, Path } from "react-hook-form";

interface BoardMemberProps {
    memberType: Path<formSchema>;
    name: string;
    memberTitle: string;
    institution: string;
    eMail: string;
    hardCopy: boolean;
}

export const BoardMember: React.FC<BoardMemberProps> = ({ name, memberType, memberTitle, institution, eMail, hardCopy}) => {
    const { control } = useFormContext();

    return(
        <div className="flex-row">
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>1º Membro Titular</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={memberTitle}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{memberTitle}</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={institution}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Instituição de Origem</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={eMail}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            
        </div>
    )
}