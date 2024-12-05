import { client } from "./fetch";
import {
  CreateSellerRequest,
  CreateSellerResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  InitiatePaymentRequest,
  InitiatePaymentResponse,
  PaymentVerificationRequest,
  PaymentVerificationResponse,
} from "./types";

export const createSellerOnboarding = async (
  data: CreateSellerRequest
): Promise<CreateSellerResponse> => {
  const response = await client.post<CreateSellerRequest, CreateSellerResponse>(
    {
      url: "user/otp/seller-onboarding/create",
      payload: data,
    }
  );
  return response.data;
};

export const resendOtp = async (
  data: ResendOtpRequest
): Promise<ResendOtpResponse> => {
  const response = await client.post<ResendOtpRequest, ResendOtpResponse>({
    url: "user/otp/seller-onboarding/resend",
    payload: data,
  });
  return response.data;
};

export const verifyOtp = async (
  data: VerifyOtpRequest
): Promise<VerifyOtpResponse> => {
  const response = await client.post<VerifyOtpRequest, VerifyOtpResponse>({
    url: "user/otp/seller-onboarding/verify",
    payload: data,
  });
  return response.data;
};

export const initiatePayment = async (
  data: InitiatePaymentRequest
): Promise<InitiatePaymentResponse> => {
  const response = await client.post<
    InitiatePaymentRequest,
    InitiatePaymentResponse
  >({
    url: "/bhugtan/payment/seller-onboarding",
    payload: data,
  });
  return response.data;
};

export const verifyPayment = async (
  receipt: string
): Promise<PaymentVerificationResponse> => {
  const response = await client.post<
    PaymentVerificationRequest,
    PaymentVerificationResponse
  >({
    url: `bhugtan/payment/${receipt}/verify`,
    payload: {},
  });
  return response.data;
};
