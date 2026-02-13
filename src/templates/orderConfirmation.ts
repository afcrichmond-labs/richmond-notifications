export const orderConfirmationTemplate = {
  email: {
    subject: "Order Confirmed - {{orderNumber}}",
    body: "Thank you for your order! Your order {{orderNumber}} has been confirmed.",
  },
  push: {
    title: "Order Confirmed",
    body: "Your order {{orderNumber}} is being processed.",
  },
  inApp: {
    type: "success",
    message: "Order {{orderNumber}} confirmed!",
  },
};
