import { Fragment, useCallback, useRef, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ISchema, schema } from './schemas/schema'
import { styles } from "./style";
import FormMessage from "../../atoms/FormMessage";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import TextInput from "../../atoms/TextInput";

export const SignInScreen = () => {

  const textInputRef = useRef<TextInput>(null);

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const {
    control,
    setValue,
    getValues,
    setError,
    formState: { isValid },
    reset,
    handleSubmit,
  } = methods;

  const onChangeField = useCallback((field: 'email' | 'password') => (text: string) => {
    setValue(field, text, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }, [setValue]);

  const onSubmit = useCallback((data: ISchema) => {
    console.log()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <Text style={styles.TextLogin}>Login</Text>
      </View>
      <FormProvider {...methods}>
        <ScrollView>
          <View style={styles.wrapper}>

            <Controller
              control={control}
              name="email"
              render={({
                field: { onBlur, value },
                fieldState: { error },
              }) => {
                const status = error
                  ? 'error'
                  : value && !error
                    ? 'success'
                    : undefined;

                return (
                  <Fragment>
                    <TextInput
                      label="Email"
                      value={value}
                      onChangeText={onChangeField('email')}
                      onBlur={onBlur}
                      status={status}
                    />
                    {error || value ? (
                      <>
                        <Text>
                          {error?.message}
                        </Text>
                      </>
                    ) : (
                      false
                    )}
                  </Fragment>
                );
              }}
            />

            <Controller
              control={control}
              name="password"
              render={({
                field: { onBlur, value },
                fieldState: { error },
              }) => {
                const status = error
                  ? 'error'
                  : value && !error
                    ? 'success'
                    : undefined;

                return (
                  <Fragment>
                    <TextInput
                      label="Password"
                      value={value}
                      onChangeText={onChangeField('password')}
                      onBlur={onBlur}
                      status={status}
                    />
                    {error || value ? (
                      <>
                        <Text>
                          {error?.message}
                        </Text>
                      </>
                    ) : (
                      false
                    )}
                  </Fragment>
                );
              }}
            />

          </View>
          <Button
            variant="primary"
            size="lg"
            style={styles.btn}
            disabled={!isValid}
            onPress={handleSubmit(onSubmit)}>
            Lanjutkan
          </Button>
        </ScrollView>


        {/* <FreezeDialog
          ref={freezeDialogRef}
          onDismiss={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'MainBottomTab',
                  params: {screen: 'Home'},
                },
              ],
            });
          }}
        /> */}

        {/* <InvalidNikDialog
          ref={invalidNikDialogRef}
          onDismiss={() => reset()}
        /> */}
      </FormProvider>

      {/* <Loading isVisible={isLoading} /> */}
    </SafeAreaView>
  );
}