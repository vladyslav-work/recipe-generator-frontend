<script>
    import { user_email } from "../lib/store";
    let showing_message = false;

    async function sendEmail() {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user_email }),
        });

        if (response.ok) {
            console.log("Email sent");
        } else {
            console.error("Failed to send email");
        }
        togleShowingForm();
    }

    function togleShowingForm() {
        showing_message = !showing_message;
    }
</script>

{#if !showing_message}
    <div class="p-2 sm:p-8 flex items-center flex-col border rounded-xl">
        <h1 class="text-3xl font-bold mb-2 sm:mb-4 text-center">Email Address</h1>
        <p class="mb-2 sm:mb-4 text-center">
            Enter your email address to receive a link to sign in.
        </p>
        <form
            on:submit|preventDefault={sendEmail}
            class="flex flex-col w-full items-center gap-4"
        >
            <input
                type="email"
                placeholder="Email"
                class="p-3 w-full sm:w-[300px] border rounded-lg"
                bind:value={$user_email}
                required
            />
            <button
                type="submit"
                class="p-3 w-full sm:w-[300px] bg-blue-900 text-white rounded-lg"
            >
                Send Email
            </button>
        </form>
        <p class="mt-4 text-center">
            By signing in, you agree to our terms and conditions.
        </p>
    </div>
{/if}

{#if showing_message}
    <section class="bg-blue-900/10 p-8 rounded-md">
        <h1 class="text-sky-900 font-bold text-3xl mb-2 text-center">Email Address</h1>
        <p class="text-center">
            We sent an email to <a class="text-sky-600 underline" href="mailto:{$user_email}">{$user_email}</a>. Click on the link in the email to
            verify your account and add this recipe!
        </p>
        <p class="text-center">
            Didn't receive our em ail? <button class="underline" on:click={togleShowingForm}>Try again</button>
        </p>
    </section>
{/if}
