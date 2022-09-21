import { Box, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MessageClient } from "cloudmailin";

async function SendEmail(values: {
  email: string;
  subject: string;
  message: string;
}) {
  const client = new MessageClient({
    username: "ecd6dea731b2f948",
    apiKey: "5A4qoRapVSDNfuUdByXyYj3a",
  });

  const response = await client.sendMessage({
    // test@example.com - test mail
    from: values.email,
    to: "luis_miguel099@hotmail.com",
    subject: values.subject,
    plain: values.message,
    test_mode: false,
  });

  if (response.id) {
    window.alert("Email successfully sent!");
  }
}

function Contact() {
  const form = useForm({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) => (value !== "" ? null : "Subject is empty!"),
      message: (value) =>
        value !== "" ? null : "Write your message before send",
    },
  });

  return (
    <Box className="max-w-lg mx-auto mt-7">
      <h1 className="font-medium text-3xl mb-10">
        Contact me
        <br />
        <p className="text-xs italic">
          It will send an email to my personal mail
        </p>
      </h1>
      <form onSubmit={form.onSubmit((values) => SendEmail(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <TextInput
          withAsterisk
          label="Subject"
          placeholder="Subject..."
          {...form.getInputProps("subject")}
        />
        <Textarea
          autosize
          minRows={6}
          withAsterisk
          label="Message"
          placeholder="Write your message here..."
          {...form.getInputProps("message")}
        />
        <button
          className="bg-transparent hover:bg-gray-200 rounded py-2 px-4 mt-2 border border-b-4 border-t-2 border-gray-300"
          type="submit"
        >
          Send Email
        </button>
      </form>
    </Box>
  );
}
export default Contact;
