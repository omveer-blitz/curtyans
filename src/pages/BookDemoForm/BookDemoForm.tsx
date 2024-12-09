import React, { useCallback, useEffect, useState } from "react";
import { css } from "@emotion/react";
import dateFormatter from 'date-and-time';

import { ValueType } from "atoms/types";
import ResponsiveDiv from "atoms/ResponsiveDiv"
import Image from "atoms/Image";
import Text from "atoms/Text";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import { SchemaModel, StringType } from "schema-typed";
import { CreateFormType, FormValidationError } from "./types";
import { useNavigate } from "react-router-dom";

// services and events
import { createBookVisitForm } from "services/bookVisitForm";
import Input from "molecules/Input";
import Radio from "molecules/Radio";
import RadioGroup from "molecules/RadioGroup";
import Header from "organisms/Header";
import Footer from "organisms/Footer";
import Button from "atoms/Button";
import ArrowWithTail from "icons/ArrowWithTail";
import Spinner from "atoms/Spinner";
import PageContainer from "atoms/PageContainer";
import Card from "molecules/Card";
import Textarea from "molecules/Textarea";
import { PageSpinner } from "atoms/Spinner/Spinner";


const validationModel = SchemaModel({
	firstName: StringType()
		.isRequired("This field is mandatory.")
		.pattern(/^[a-zA-Z\s]*$/, "First Name should contain only letters"),
	lastName: StringType()
		.isRequired("This field is mandatory.")
		.pattern(/^[a-zA-Z\s]*$/, "Last Name should contain only letters"),
	email: StringType().isEmail("Invalid email address"),
	phone: StringType()
		.isRequired("This field is mandatory")
		.pattern(/^[5]+[024568]+[0-9]{7}$/, "Phone Number must start with 50/52/54/55/56/58")
		.rangeLength(9, 9, "Please enter a 9-digit Contact number"),
	address: StringType()
		.isRequired("This field is mandatory"),
	city: StringType().isRequired("This field is mandatory"),
	visitDate: StringType().isRequired("This field is mandatory"),
	categoryType: StringType().isRequired("This field is mandatory"),
});

const initialDetailsValidation: FormValidationError = {
	firstName: {
		hasError: false,
	},
	lastName: { hasError: false },
	email: { hasError: false },
	phone: { hasError: false },
	address: { hasError: false },
	city: { hasError: false },
	visitDate: { hasError: false },
	categoryType: { hasError: false }
};

const styles = {
	formWrapper: css`
		position: relative;
	`,
	loaderWrapper: css`
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background-color: rgba(0,0,0,.4);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`,
	videoIframe: css`
		width: 100%;
		max-width: 650px;
		overflow: hidden;
		border-radius: var(--spacing-md);
		margin: 0 var(--spacing-md);
	`,
}

const SuccessGif = () => {
	return (
		<Flexbox direction="row" justify="center" align="center" mb="sm">
			<Image height={128} width={128} src="https://d2z53scj8veve3.cloudfront.net/shopdeck-home/form-completed.gif" />
		</Flexbox>
	)
}

const minimumDate = dateFormatter.format(new Date(), 'YYYY-MM-DD');
const maximumDate = dateFormatter.format(dateFormatter.addDays(new Date(), 30), 'YYYY-MM-DD');

export default () => {
	const navigate = useNavigate();
	const [validationErrors, setValidationErrors] = React.useState<FormValidationError>(initialDetailsValidation);


	const [formData, setFormData] = useState<CreateFormType>({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
		flatNo: "",
		city: "",
		visitDate: "",
		categoryType: "",
		comment: "",
	});

	const [loading, setLoading] = useState<boolean>(false);
	const [formScreen, setFormScreen] = React.useState<'form' | 'thankyou'>('form');

	const isFormValid =
		Object.values(validationErrors).every((field) => !field.hasError) &&
		formData.firstName !== "" &&
		formData.lastName !== "" &&
		formData.email !== "" &&
		formData.phone !== "" &&
		formData.address !== "" &&
		formData.city !== "" &&
		formData.visitDate !== "" &&
		formData.categoryType !== "";

	const handleFirstNameChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, firstName: value };
		const validation = validationModel.checkForField("firstName", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, firstName: validation });
	}, [formData, validationModel, validationErrors]);

	const handleLastNameChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, lastName: value };
		const validation = validationModel.checkForField("lastName", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, lastName: validation });
	}, [formData, validationModel, validationErrors]);

	const handleEmailChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, email: value };
		const validation = validationModel.checkForField("email", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, email: validation });
	}, [formData, validationModel, validationErrors]);

	const handlePhoneChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, phone: value };
		const validation = validationModel.checkForField("phone", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, phone: validation });
	}, [formData, validationModel, validationErrors]);

	const handleAddressChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, address: value };
		const validation = validationModel.checkForField("address", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, address: validation });
	}, [formData, validationModel, validationErrors]);

	const handleFlatNoChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, flatNo: value };
		setFormData(updatedFormData);
	}, [formData, validationModel, validationErrors]);

	const handleCityChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, city: value };
		const validation = validationModel.checkForField("city", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, city: validation });
	}, [formData, validationModel, validationErrors]);

	const handleVisitDateChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, visitDate: value };
		const validation = validationModel.checkForField("visitDate", updatedFormData);
		setFormData(updatedFormData);
		setValidationErrors({ ...validationErrors, visitDate: validation });
	}, [formData, validationModel, validationErrors]);

	const handleCategoryTypeChange = useCallback((value: ValueType): void => {
		const updatedFormData = { ...formData, categoryType: value + '' as any };
		setFormData(updatedFormData);
	}, [formData])

	const handleCommentChange = useCallback((event) => {
		const value = event.target.value;
		const updatedFormData = { ...formData, comment: value };
		setFormData(updatedFormData);
	}, [formData, validationModel, validationErrors]);


	const handleBookDemoForm = useCallback((): void => {
		setLoading(true);
		createBookVisitForm({
			first_name: formData.firstName,
			last_name: formData.lastName,
			email: formData.email,
			phone: formData.phone,
			address: formData.address,
			flat_no: formData.flatNo,
			city: formData.city,
			visit_date: formData.visitDate,
			category_type: formData.categoryType,
			comment: formData.comment,
		})
			.then(() => {
				setLoading(false);
				setFormScreen('thankyou');
			})
			.catch(() => {
				setLoading(false);
			});
	}, [formData, setLoading, createBookVisitForm, navigate])

	return (
		<>
			<Header />
			<PageContainer>
				{formScreen === 'form' && (
					<Flexbox direction="row" justify="center" align="center">
						<FlexboxItem colspan={24} colspanXL={18}>

							<Text mb="xl" as="h1" color="mine-shaft" fontStyleGuide="heading5" fontStyleGuideXL="heading2" align="center">
								Book a Free Consultation
							</Text>
							<Card>
								<ResponsiveDiv
									css={styles.formWrapper}
								>
									{loading && (
										<PageSpinner />
									)}
									<Flexbox direction="row" justify="space-between" align="center" gap={16} mb="sm">
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												fullWidth={true}
												mb="sm"
												title="First Name"
												required={true}
												name="firstName"
												maxLength={40}
												value={formData.firstName}
												onChange={handleFirstNameChange}
												validationType={validationErrors.firstName?.hasError ? "error" : undefined}
												validationMessage={validationErrors.firstName?.hasError ? validationErrors.firstName.errorMessage : undefined}
											/>
										</FlexboxItem>
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												fullWidth={true}
												mb="sm"
												title="Last Name"
												required={true}
												name="lastName"
												maxLength={40}
												value={formData.lastName}
												onChange={handleLastNameChange}
												validationType={validationErrors.lastName?.hasError ? "error" : undefined}
												validationMessage={validationErrors.lastName?.hasError ? validationErrors.lastName.errorMessage : undefined}
											/>
										</FlexboxItem>
									</Flexbox>
									<Flexbox direction="row" justify="space-between" align="center" gap={16} mb="sm">
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												mb="sm"
												required
												fullWidth={true}
												title="E-mail Address"
												name="email"
												value={formData.email}
												onChange={handleEmailChange}
												validationType={validationErrors.email?.hasError ? "error" : undefined}
												validationMessage={validationErrors.email?.hasError ? validationErrors.email.errorMessage : undefined}
											/>
										</FlexboxItem>
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												mb="sm"
												fullWidth={true}
												required
												title="Phone Number"
												leftAddon={<Text fontStyleGuide="body4" color="white">{"+971"}</Text>}
												name="phone"
												value={formData.phone}
												onChange={handlePhoneChange}
												validationType={validationErrors.phone?.hasError ? "error" : undefined}
												validationMessage={validationErrors.phone?.hasError ? validationErrors.phone.errorMessage : undefined}
											/>
										</FlexboxItem>
									</Flexbox>
									<Flexbox direction="row" justify="space-between" align="center" gap={16} mb="sm">
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												fullWidth={true}
												mb="sm"
												title="Address"
												required={true}
												name="address"
												maxLength={40}
												value={formData.address}
												onChange={handleAddressChange}
												validationType={validationErrors.address?.hasError ? "error" : undefined}
												validationMessage={validationErrors.address?.hasError ? validationErrors.address.errorMessage : undefined}
											/>
										</FlexboxItem>
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												fullWidth={true}
												mb="sm"
												title="Flat Number/Building Name"
												name="flatNo"
												maxLength={40}
												value={formData.flatNo}
												onChange={handleFlatNoChange}
												validationType={validationErrors.flatNo?.hasError ? "error" : undefined}
												validationMessage={validationErrors.flatNo?.hasError ? validationErrors.flatNo.errorMessage : undefined}
											/>
										</FlexboxItem>
									</Flexbox>
									<Flexbox direction="row" justify="space-between" align="center" gap={16} mb="sm">
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												fullWidth={true}
												mb="sm"
												title="City"
												required={true}
												name="city"
												maxLength={40}
												value={formData.city}
												onChange={handleCityChange}
												validationType={validationErrors.city?.hasError ? "error" : undefined}
												validationMessage={validationErrors.city?.hasError ? validationErrors.city.errorMessage : undefined}
											/>
										</FlexboxItem>
										<FlexboxItem colspan={24} colspanXL={11.5}>
											<Input
												type="date"
												fullWidth={true}
												mb="sm"
												required
												title="Date of the Visit"
												name="date"
												min={minimumDate}
												max={maximumDate}
												value={formData.visitDate}
												onChange={handleVisitDateChange}
												validationType={validationErrors.visitDate?.hasError ? "error" : undefined}
												validationMessage={validationErrors.visitDate?.hasError ? validationErrors.visitDate.errorMessage : undefined}
											/>
										</FlexboxItem>
									</Flexbox>
									<ResponsiveDiv mb="xxl">
										<Text mb="sm" color="mine-shaft" fontStyleGuide="body4">Select a product type <sup>*</sup></Text>
										<RadioGroup
											name="category"
											value={formData.categoryType}
											onChange={handleCategoryTypeChange}
										>
											<Flexbox direction="row" justify="flex-start" align="stretch" wrap="wrap">
												<FlexboxItem colspan={8} colspanXL={8} mb="sm">
													<Radio value="curtains">Curtains</Radio>
												</FlexboxItem>
												<FlexboxItem colspan={8} colspanXL={8} mb="sm">
													<Radio value="blinds">Blinds</Radio>
												</FlexboxItem>
												<FlexboxItem colspan={8} colspanXL={8} mb="sm">
													<Radio value="wallpaper">Wallpaper</Radio>
												</FlexboxItem>
											</Flexbox>
										</RadioGroup>
									</ResponsiveDiv>
									<Flexbox direction="row" justify="space-between" align="center" mb="sm">
										<FlexboxItem colspan={24}>
											<Textarea
												mb="xs"
												fullWidth
												title="Comment"
												name="comment"
												id="comment"
												required={false}
												rows={4}
												value={formData.comment}
												onChange={handleCommentChange}
												validationType={validationErrors.comment?.hasError ? "error" : "none"}
												validationMessage={validationErrors.comment?.errorMessage || ""}
											/>
										</FlexboxItem>
									</Flexbox>

									<ResponsiveDiv
										mt="2xl"
									>
										<Button
											type="primary"
											onClick={handleBookDemoForm}
											disabled={!isFormValid || loading}
										>
											Confirm Your Visit
										</Button>
									</ResponsiveDiv>
								</ResponsiveDiv>
							</Card>
						</FlexboxItem>
					</Flexbox>
				)}
				{formScreen === 'thankyou' && (
					<Flexbox direction="row" justify="center" align="center" mt="2xl" mb="2xl">
						{/* <FlexboxItem colspan={24}>
							<SuccessGif />
						</FlexboxItem> */}
						<FlexboxItem colspan={24}>
							<Text fontStyleGuide="heading3" color="flamingo" align="center" mb="sm">
								Thank you for your interest!
							</Text>
							<Text as="p" color="mine-shaft" align="center" fontStyleGuide="body3" mb="2xl" textWrap="balance">
								Our consultants will be contacting you within 24-48 hours to schedule your free visit.
							</Text>
							<Flexbox direction="row" justify="center" align="center">
								<Button type="secondary" onClick={() => navigate("/collection")}>
									<Flexbox direction="row" justify="center" align="center">
										Explore Our Collection
									</Flexbox>
								</Button>
							</Flexbox>
						</FlexboxItem>
					</Flexbox>
				)}
			</PageContainer>
			<Footer />
		</>

	)
}
