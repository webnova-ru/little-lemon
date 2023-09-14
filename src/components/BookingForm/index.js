import { useEffect } from "react";
import { useFormik } from "formik";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import * as Yup from "yup";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Textarea } from "@chakra-ui/react";

import useSubmit from "hooks/useSubmit";
import { useAlertContext } from "context/alertContext";

const availableTimes = [
    { time: "17:00", status: true },
    { time: "18:00", status: true },
    { time: "19:00", status: true },
    { time: "20:00", status: true },
    { time: "21:00", status: true },
    { time: "22:00", status: true }
]

const BookingForm = ({ isNonMobile }) => {
    const { response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    useEffect(function () {
        if (response) {
            onOpen(response.type, response.message)
        }
    }, [response]);

    const formik = useFormik({
        initialValues: {
            guestNumber: 2,
            date: new Date(),
            time: "",
            occasion: "",
            bookerName: "",
            bookerPhone: "",
            comment: ""
        },
        onSubmit: async (values, event) => {
            try {
                await submit('https://fakeapi.none', values);

                event.resetForm();
            } catch (error) { } finally {
                event.setSubmitting(false);
            }
        },
        validationSchema: Yup.object({
            guestNumber: Yup.number().positive().integer().min(2).max(10),
            time: Yup.string().required("Time is required"),
            bookerName: Yup.string().required("Name is required"),
            bookerPhone: Yup.string().required("Phone is required"),
        }),
    });

    const dateChangeHandler = (value) => {
        formik.setFieldValue('date', value)
    }

    return (
        <Box
            py={{ base: '5', sm: '8' }}
            px={{ base: '5', sm: '10', md: '20' }}
            boxShadow="md"
            borderRadius="xl"
        >
            <Stack spacing="6" w={isNonMobile ? "md" : "sm"}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing="5">
                        <FormControl isInvalid={formik.errors.guestNumber && formik.touched.guestNumber}>
                            <FormLabel htmlFor="guestNumber" color="primary.green">Number of persons</FormLabel>
                            <Input
                                id="guestNumber"
                                name="guestNumber"
                                type="number"
                                placeholder="Number of persons"
                                disabled={formik.isSubmitting}
                                {...formik.getFieldProps("guestNumber")}
                            />
                            <FormErrorMessage>{formik.errors.guestNumber}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="date" color="primary.green">Date</FormLabel>
                            <SingleDatepicker
                                name="date"
                                date={formik.getFieldProps("date").value}
                                onDateChange={dateChangeHandler}
                            />
                        </FormControl>
                        <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                            <FormLabel htmlFor="time" color="primary.green">Time</FormLabel>
                            <Select
                                id="time"
                                name="time"
                                placeholder='Select time'
                                {...formik.getFieldProps("time")}
                            >
                                {
                                    availableTimes.map((item) => <option key={item.time} disabled={!item.status}>{item.status ? item.time : "booked"}</option>)
                                }
                            </Select>
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="occasion" color="primary.green">Occasion</FormLabel>
                            <Select
                                id="occasion"
                                name="occasion"
                                placeholder="(Optional)"
                                disabled={formik.isSubmitting}
                                {...formik.getFieldProps("occasion")}
                            >
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.bookerName && formik.touched.bookerName}>
                            <FormLabel htmlFor="bookerName" color="primary.green">Name</FormLabel>
                            <Input
                                id="bookerName"
                                name="bookerName"
                                type="text"
                                placeholder="Your name"
                                disabled={formik.isSubmitting}
                                {...formik.getFieldProps("bookerName")}
                            />
                            <FormErrorMessage>{formik.errors.bookerName}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.bookerPhone && formik.touched.bookerPhone}>
                            <FormLabel htmlFor="bookerPhone" color="primary.green">Phone</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+7' />
                                <Input
                                    id="bookerPhone"
                                    name="bookerPhone"
                                    type="tel"
                                    placeholder='Phone number'
                                    disabled={formik.isSubmitting}
                                    {...formik.getFieldProps("bookerPhone")}
                                />
                            </InputGroup>
                            <FormErrorMessage>{formik.errors.bookerPhone}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="comment" color="primary.green">Comment</FormLabel>
                            <Textarea
                                id="comment"
                                name="comment"
                                placeholder="(Optional)"
                                disabled={formik.isSubmitting}
                                {...formik.getFieldProps("comment")}
                            />
                        </FormControl>
                    </Stack>
                    <Stack py="20px">
                        <Button
                            variant="primaryReverse"
                            type="submit"
                            isLoading={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                        >
                            Reserve Now
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Box >
    )
};

export default BookingForm;