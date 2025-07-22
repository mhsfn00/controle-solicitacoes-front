import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { CustomFileInput } from "../CustomFileInput/CustomFileInput";

interface BoardMemberProps {
  index: number;
  nameField: string;
  emailField: string;
  titleField?: string;
  institutionField?: string;
  hardCopyField?: string;
  type: "titular" | "suplente" | "externo";
}

export const BoardMember: React.FC<BoardMemberProps> = ({ index, nameField, emailField, titleField, institutionField, hardCopyField, type }) => {
    const { control } = useFormContext();
    return(
        <div className="flex-row w-full py-5">
            <div className="flex col gap-5 w-full py-4">
                <FormField
                    control={control}
                    name={nameField}
                    render={({ field }) => (
                        <FormItem className="w-4/5">
                            <FormLabel className="gap-0 capitalize">
                              {index % 3 + 1}º Membro {type}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                {(type == "titular" ||  type == "suplente") && titleField && (<FormField
                     control={control}
                     name={titleField}
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel className="gap-0 capitalize">
                           Título
                           <span className="text-red-500">*</span>
                         </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="capitalize">
                            {["Mestrado", "Doutorado"].map((title) => (
                              <SelectItem key={title} value={title}>
                                {title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                       </FormItem>
                    )}
                />)}
            </div>
            {(type == "titular" ||  type == "suplente") && institutionField && (<FormField
                control={control}
                name={institutionField}
                render={({ field }) => (
                    <FormItem className="py-2">
                        <FormLabel className="gap-0">
                          Instituição de Origem
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />)}
            <FormField
                control={control}
                name={emailField}
                render={({ field }) => (
                    <FormItem className="py-2">
                        <FormLabel className="gap-0">
                          E-mail
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            {(type == "titular" ||  type == "suplente") && hardCopyField && (<FormField
                control={control}
                name={hardCopyField}
                render={({ field }) => (
                  <FormItem className="py-2">
                    <FormLabel className="gap-0">
                      Cópia Impressa
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex gap-5 py-2 capitalize"
                      >
                        {["sim", "não"].map((option) => (
                          <FormItem
                            key={option}
                            className="flex"
                          >
                            <FormControl>
                              <RadioGroupItem value={option}/>
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />)}
              {type == "externo" && (
                <div className="w-full py-2">
                  <CustomFileInput />
                </div>
              )}
        </div>
    )
}