"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronRightIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import FormHeader from "../FormHeader/FormHeader"
import { CustomFileInput } from "../CustomFileInput/CustomFileInput"
import ProgressStepper from "../ProgressStepper/ProgressStepper"
import { useNavigate } from "react-router-dom"
import { formSchema, steps, defenseModality } from "./defenseFormSchema";
import { BoardMember } from "./BoardMember"

export function DefenseRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    shouldUnregister: true,
    defaultValues: {
      username: "",
      academicRecord: "",
      date: new Date(),
      time: "19:30",
      block: "",
      room: "",      
      thesisTitle: "",
      advisor: "",
      coAdvisor1: "",
      coAdvisor2: "",
      defenseModality: 'inPerson',
      link: "",
      titularMembers: [
        { type: "titular", name: "", title: "mestrado", eMail: "", institution: "", hardCopy: "não" },
        { type: "titular", name: "", title: "mestrado", eMail: "", institution: "", hardCopy: "não" },
        { type: "titular", name: "", title: "mestrado", eMail: "", institution: "", hardCopy: "não" }
      ],
      suplenteMemberSchema: [
        { type: "suplente", name: "", title: "mestrado", eMail: "", institution: "", hardCopy: "não" },
        { type: "suplente", name: "", title: "mestrado", eMail: "", institution: "", hardCopy: "não" },
        { type: "suplente", name: "", title: "mestrado", eMail: "", institution: "", hardCopy: "não" }
      ],
      externalMembers: [
        { type: "externo", name: "", eMail: "", lattes: "" },
        { type: "externo", name: "", eMail: "", lattes: "" }
      ]
    }
  });

  const navigate = useNavigate();
  const selectedModality = form.watch("defenseModality");
  const [currentStep, setCurrentStep] = useState(0);


  async function validateFirstStep() { 
    let isValid = await form.trigger(['username', 'academicRecord', 'defenseModality', 'date', 'time']);
    const modality = form.getValues("defenseModality");

    if (modality == "inPerson") {
      console.log("pessoal")
      isValid = isValid && await form.trigger(['block', 'room'])
    } else if (modality == "remote") {
      isValid = isValid && await form.trigger(['link'])
    } else if (modality == "hybrid") {
      isValid = isValid && await form.trigger(['block', 'room', 'link'])
    }

    if (isValid) {
      nextStep();
    }
  }

  async function validateSecondStep() {
    const isValid = await form.trigger(['thesisTitle', 'advisor', 'thesisFile']);
    if (isValid) {
      nextStep();
    }
  }

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep((step) => step + 1);
    }
  }
  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    } else {
      navigate('/');
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <ProgressStepper steps={steps} currentStep={currentStep}/>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 0 && (

          <div>
            <div className="flex-col py-10 ">
              <Button 
                variant="link" 
                className="p-0 underline font-semibold"
                onClick={previousStep}
              >
                Voltar
              </Button>
              <FormHeader
                title="Informações Gerais"
                subTitle="Dados referentes ao acadêmico e os detalhes de sua defesa."
              />
            </div>

            <div className="flex gap-5 py-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-7/10">
                    <FormLabel className="gap-0">
                      Usuário
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="pg123456@uem.br" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="academicRecord"
                render={({ field }) => (
                  <FormItem className="size-fit">
                    <FormLabel className="gap-0">
                      Registro Acadêmico
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} />
                    </FormControl>
                    
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-5 py-8 justify-between">
              <FormField
                control={form.control}
                name="defenseModality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="gap-0">
                      Modalidade de Defesa
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex space-y-1"
                      >
                        {defenseModality.map((option) => (
                          <FormItem
                            key={option.value}
                            className="flex items-center space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={option.value}/>
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    
                  </FormItem>
                )}
              />
            </div>

            <div className="flex-row gap-5 py-2">
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex-col">
                      <FormLabel className="gap-0">
                        Data
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-0">
                        Horário
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {(selectedModality === "inPerson" || selectedModality == "hybrid") && (
                  <div className="flex gap-5">
                    <FormField
                      control={form.control}
                      name="block"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormLabel className="gap-0">
                            Bloco
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="C56" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="room"
                      render={({ field }) => (
                        <FormItem className="w-2/3">
                          <FormLabel className="gap-0">
                            Sala
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="102 - Anfiteatro" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
              {(selectedModality === "remote" || selectedModality == "hybrid") && (
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem className="py-6">
                      <FormLabel className="gap-0">
                        Link
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="meet.google.com/vfg-ehmw-vvp" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            <div className="flex justify-end gap-4 py-10">
              <Button type="reset" className="bg-[#F62D2D] text-white hover:bg-red-700" onClick={() => navigate('/')}>
                Cancelar
              </Button>
              <Button onClick={validateFirstStep}>
                Continuar
                <ChevronRightIcon/>
              </Button>
            </div>
          </div>
          
        )}
        {currentStep === 1 && (

          <div >
            <div>

              <div className="flex-col py-10">
                <Button
                  variant="link"
                  className="p-0 underline font-semibold"
                  onClick={previousStep}
                >
                  Voltar
                </Button>
                <FormHeader
                  title="Informações Dissertação"
                  subTitle="Informe os dados da dissertação que será submetida à defesa."
                />
              </div>

              <div className="flex-col gap-5 py-2">

                <FormField
                  control={form.control}
                  name="thesisTitle"
                  render={({ field }) => (
                    <FormItem className="w-full py-2">
                      <FormLabel className="gap-0">
                        Título da Dissertação
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Título da dissertação" {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />

                <div className="w-full py-2">
                <FormField
                    control={form.control}
                    name="thesisFile"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="gap-0">
                       Anexar Tese 
                       <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                                <CustomFileInput onChange={field.onChange} />
                        </FormControl>
                    </FormItem>
                    )}
                />
                </div>

                <FormField
                  control={form.control}
                  name="advisor"
                  render={({ field }) => (
                    <FormItem className="w-full py-2">
                      <FormLabel className="gap-0">
                        Orientador(a)
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do orientador(a)" {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              
                <FormField
                  control={form.control}
                  name="coAdvisor1"
                  render={({ field }) => (
                    <FormItem className="w-full py-2">
                      <FormLabel className="gap-0">
                        1º Coorientador(a)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do 1º coorientador(a)" {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              
                <FormField
                  control={form.control}
                  name="coAdvisor2"
                  render={({ field }) => (
                    <FormItem className="w-full py-2">
                      <FormLabel className="gap-0">
                        2º Coorientador(a)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do 2º coorientador(a)" {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              
              </div>
              <div className="flex justify-end gap-4 py-10">
                <Button type="reset" className="bg-[#F62D2D] text-white hover:bg-red-700" onClick={() => navigate('/')}>
                    Cancelar
                </Button>
                <Button onClick={validateSecondStep}>
                  Continuar
                  <ChevronRightIcon/>
                </Button>
              </div>
            </div>
          </div>

        )}
        {currentStep === 2 && (

          <div>
            <div className="flex-col py-10">
              <Button
                variant="link"
                className="p-0 underline font-semibold"
                onClick={previousStep}
              >
                Voltar
              </Button>
              <FormHeader
                title="Banca Examinadora"
                subTitle="Informações sobre os docentes que irão compor a banca examinadora."
              />
            </div>

            <div className="flex-col gap-5 py-2">
              <FormProvider {...form}>
                <h2 className="text-xl font-semibold">Membros Titulares</h2>
                  {[0, 1, 2].map((index) => (
                      <BoardMember
                        key={index}
                        index={index}
                        type="titular"
                        nameField={`titularMembers.${index}.name`}
                        emailField={`titularMembers.${index}.eMail`}
                        titleField={`titularMembers.${index}.title`}
                        institutionField={`titularMembers.${index}.institution`}
                        hardCopyField={`titularMembers.${index}.hardCopy`}
                      />
                  ))}
                <h2 className="text-xl font-semibold">Membros Suplentes</h2>
                  {[3, 4, 5].map((index) => (
                      <BoardMember
                        key={index}
                        index={index}
                        type="suplente"
                        nameField={`titularMembers.${index}.name`}
                        emailField={`titularMembers.${index}.eMail`}
                        titleField={`titularMembers.${index}.title`}
                        institutionField={`titularMembers.${index}.institution`}
                        hardCopyField={`titularMembers.${index}.hardCopy`}
                      />
                  ))}
                <h2 className="text-xl font-semibold">Membros Externos</h2>
                  {[6, 7].map((index) => (
                      <BoardMember
                        key={index}
                        index={index}
                        type="externo"
                        nameField={`titularMembers.${index}.name`}
                        emailField={`titularMembers.${index}.eMail`}
                        titleField={`titularMembers.${index}.title`}
                        institutionField={`titularMembers.${index}.institution`}
                        hardCopyField={`titularMembers.${index}.hardCopy`}
                      />
                  ))}
              </FormProvider>
            </div>

            <div className="flex justify-end gap-4 py-10">
                <Button type="reset" className="bg-[#F62D2D] text-white hover:bg-red-700" onClick={() => navigate('/')}>
                    Cancelar
                </Button>
                <Button type="submit" onClick={nextStep}>
                    Cadastrar
                </Button>
            </div>
          </div>

        )}
      </form>
    </Form>
  )
}

export default DefenseRequestForm
