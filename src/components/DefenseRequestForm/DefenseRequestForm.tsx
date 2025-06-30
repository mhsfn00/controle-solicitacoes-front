"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, ChevronRightIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import styles from "./DefenseRequestForm.module.css"
import FormHeader from "../FormHeader/FormHeader"

const defenseModality = [
  { value: "inPerson", label: "Presencial"},
  { value: "remote", label: "Remoto"},
  { value: "hybrid", label: "Híbrido"},
];

const cities = ["Maringá", "Cidade 2", "Cidade 3"] as const;

const formSchema = z.object({
  username: z.string(),
  academicRecord: z.string(),
  defenseModality: z.enum(["inPerson", "remote", "hybrid"]),
  date: z.coerce.date(),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  block: z.string().min(2).max(50),
  room: z.string().min(2).max(50),
  city: z.enum(cities),
  thesisTitle: z.string(),
  advisor: z.string(),
  coAdvisor1: z.string(),
  coAdvisor2: z.string(),
});

export function DefenseRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    // Need to check each step's inputs here before moving to next

    if (currentStep < 2) {
      setCurrentStep((step) => step + 1);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 0 && (

          <div className={styles.step1}>
            <div className="flex-col py-10 ">
              <Link to="/previous">Voltar</Link>
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
                      <Input placeholder="pg123456@uem.br" {...field} />
                    </FormControl>
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-5 py-2 justify-between">
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex-col">
                    <FormLabel>Date of birth</FormLabel>
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
                    <FormMessage />
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
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-5 py-2 justify-between">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="block"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bloco</FormLabel>
                    <FormControl>
                      <Input placeholder="C56" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="room"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Sala</FormLabel>
                    <FormControl>
                      <Input placeholder="102 - Anfiteatro" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end my-10">
              <Button onClick={nextStep}>
                Continuar
                <ChevronRightIcon/>
              </Button>
            </div>
          </div>
          
        )}
        {currentStep === 1 && (

          <div className={styles.step2}>
            <div className="flex-col py-10 ">

              <Link to="/previous">Voltar</Link>
              <FormHeader
                title="Informações Dissertação"
                subTitle="Informe os dados da dissertação que será submetida à defesa."
              />
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
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
                      <FormMessage />
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
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do 1º coorientador(a)" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do 2º coorientador(a)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
              </div>
              <div className="flex justify-end my-10">
                <Button onClick={nextStep}>
                  Continuar
                  <ChevronRightIcon/>
                </Button>
              </div>
            </div>
          </div>

        )}
        {currentStep === 2 && (
            <Button type="submit">
              Submit
            </Button>
        )}
      </form>
    </Form>
  )
}

export default DefenseRequestForm
