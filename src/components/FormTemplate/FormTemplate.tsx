"use client"
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

import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const defenseModality = [
  { value: "inPerson", label: "Presencial"},
  { value: "remote", label: "Remoto"},
  { value: "hybrid", label: "Híbrido"},
];

const cities = ["Maringá", "Cidade 2", "Cidade 3"] as const;

const formSchema = z.object({
  username: z.string().min(2).max(50),
  academicRecord: z.string().min(5).max(6),
  defenseModality: z.enum(["inPerson", "remote", "hybrid"], {
    required_error: "É preciso selecionar uma modalidade"
  }),
  date: z.coerce.date({ 
    required_error: "A data da defesa é obrigatória",
    invalid_type_error: "Formato de data inválido"
  }),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Formato de horário inválido",
  }),
  block: z.string().min(2).max(50),
  room: z.string().min(2).max(50),
  cities: z.enum(cities, {
    required_error: "É preciso selecionar uma cidade",
  }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      academicRecord: "",
      date: new Date(),
      time: "",
      block: "",
      room: "",
      cities: "Maringá"
    },
  });

    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
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
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {defenseModality.map((option) => (
                    <FormItem
                      key={option.value}
                      className="flex items-center space-x-3 space-y-0"
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
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
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
          render={() => (
            <FormItem>
              <FormLabel className="gap-0">
                Horário
              </FormLabel>
              <FormControl>
                <Input 
                  type="time"
                  defaultValue="19:30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cities"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="gap-0">
                Cidade
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um departamento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* 3. Mapeie seu array de opções para os SelectItem */}
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
          render={() => (
            <FormItem>
              <FormLabel className="gap-0">
                Bloco
              </FormLabel>
              <FormControl>
                <Input defaultValue={"C56"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="room"
          render={() => (
            <FormItem>
              <FormLabel className="gap-0">
                Sala
              </FormLabel>
              <FormControl>
                <Input defaultValue={"102 - Anfiteatro"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ProfileForm