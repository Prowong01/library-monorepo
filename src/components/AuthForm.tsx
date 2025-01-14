"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
}

const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props) => {
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {};

  return <div>AuthForm -- {type}</div>;
};
export default AuthForm;
