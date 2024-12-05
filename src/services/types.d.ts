export type CreateSellerRequest = {
	name: string;
	contact_number: string;
	brand_name: string;
	email: string;
	gst_number: string;
};

export type CreateSellerResponse = {
	code: number;
	message: string;
};

export type BookDemoFormRequest = {
	brand_name: string;
	contact_number: string;
	email: string;
	has_gst: string;
	shopping_platform: string[];
	number_of_orders: string;
	categories: string[];
};

export type BookDemoFormResponse = {
	data: string;
};

export type EventRequest = {
	event_label?: string;
	event_datum: {
		field_information?: string[] | string | unknown;
		error_information?: string;
	} | unknown;
	visitor_id: string;
	session_id: string;
	language: string;
	useragent: string;
	urlslug: string;
	platform: string;
	utm_source?: string;
	utm_campaign?: string;
	utm_medium?: string;
	utm_content?: string;
	utm_term?: string
}

export type EventResponse = {
	message: string;
	data: string
}

export type ResendOtpRequest = {
	contact_number: string;
};

export type ResendOtpResponse = {
	code: number;
};

export type VerifyOtpRequest = {
	contact_number: string;
	otp: string;
};

export type VerifyOtpResponse = {
	code: number;
	data: {
		seller_id: string;
		seller_status?: "already_exists";
	};
}

type UserData = {
	name: string;
	seller_id: string;
	contact_number: number;
	brand_name: string;
	gst_number: string;
};

type RazorpayData = {
	razorpay_order_id: string;
	receipt: string;
};

type PaymentData = {
	currency: string;
	amount: number;
	transaction_id: string;
};

declare enum PaymentStatusEnum {
	NOT_STARTED = "not_started",
	PENDING = "pending",
	FAILURE = "failure",
	SUCCESS = "success",
	EMPTY = "empty",
}

export type InitiatePaymentRequest = {
	seller_id: string;
	is_retry?: boolean;
};

export type InitiatePaymentResponse =
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.NOT_STARTED;
			razorpay_data: RazorpayData;
			user_data: UserData;
			payment_data: Omit<PaymentData, 'transaction_id'>;
		};
	}
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.PENDING;
		};
	}
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.FAILURE;
			user_data: UserData;
			payment_data: Omit<PaymentData, 'currency'>;
			message: string;
		};
	}
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.SUCCESS;
			user_data: UserData;
			payment_data: Omit<PaymentData, 'currency'>;
		};
	};

export type PaymentVerificationRequest = {};

export type PaymentVerificationResponse =
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.PENDING;
		};
	}
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.FAILURE;
			user_data: UserData;
			payment_data: Omit<PaymentData, 'currency'>;
			message: string;
		};
	}
	| {
		code: 200;
		data: {
			seller_id: string;
			payment_status: PaymentStatusEnum.SUCCESS;
			user_data: UserData;
			payment_data: Omit<PaymentData, 'currency'>;
		};
	}


  export type RazorPayKeyResponse = {
    code: 200;
    data: {
      value: string
    }
  }

export type ContactUsFormRequest = {
	fullName: string;
	email: string;
	phoneNumber: string;
	message: string;
}

export type ContactUsFormResponse = {
	status: number;
	data: {
		message: string;
	}
}
