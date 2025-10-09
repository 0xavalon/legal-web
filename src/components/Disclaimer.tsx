interface DisclaimerProps {
  variant?: "yellow" | "red";
}

export default function Disclaimer({ variant = "yellow" }: DisclaimerProps) {
  const isYellow = variant === "yellow";
  const isRed = variant === "red";

  const containerClasses = isYellow
    ? "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:bg-gradient-to-br dark:from-yellow-900/20 dark:to-yellow-800/20"
    : "bg-gradient-to-br from-red-50 to-red-100 dark:bg-gradient-to-br dark:from-red-900/30 dark:to-red-800/30";

  const titleClasses = isYellow
    ? "text-yellow-900 dark:text-yellow-200"
    : "text-red-900 dark:text-red-100";

  const textClasses = isYellow
    ? "text-yellow-800 dark:text-yellow-100"
    : "text-red-800 dark:text-red-100";

  return (
    <div
      className={`${containerClasses} rounded-2xl p-8 border-2 ${
        isYellow
          ? "border-yellow-200 dark:border-yellow-700"
          : "border-red-200 dark:border-red-700"
      }`}
    >
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">{isYellow ? "⚠️" : "🚨"}</span>
        <h2 className={`text-2xl font-bold ${titleClasses}`}>Disclaimer</h2>
      </div>
      <div className={`text-base ${textClasses} space-y-4 leading-relaxed`}>
        <p>
          <strong className="font-bold">(i)</strong> The Licence held by{" "}
          <strong className="font-bold">Wind Technologies Ltd</strong> is an{" "}
          <strong className="font-bold">
            Innovation Testing Licence (ITL)
          </strong>{" "}
          issued by the Dubai Financial Services Authority (DFSA), which
          authorises the Firm{" "}
          <strong className="font-bold">solely to test its services</strong>{" "}
          within the parameters approved under the DFSA Testing Plan (Phase 1).
        </p>
        <p>
          <strong className="font-bold">(ii)</strong> As the Licence is
          restricted to testing, certain
          <strong className="font-bold">
            {" "}
            standard regulatory requirements and client protections may not
            apply
          </strong>{" "}
          during this phase. Participants in the testing environment acknowledge
          that they may have{" "}
          <strong className="font-bold">reduced rights</strong> and{" "}
          <strong className="font-bold">may not be fully compensated</strong>{" "}
          for any losses incurred as part of the testing activities.
        </p>
        <p>
          <strong className="font-bold">(iii)</strong> The Firm will{" "}
          <strong className="font-bold">
            not undertake or process any financial transactions
          </strong>{" "}
          until a designated{" "}
          <strong className="font-bold">Client Money Account</strong> has been
          opened and approved, as per the DFSA Testing Plan.
        </p>
        <p>
          <strong className="font-bold">(iv)</strong> Upon completion of the
          testing phase and{" "}
          <strong className="font-bold">removal of licence restrictions</strong>
          , the Firm will execute and implement a{" "}
          <strong className="font-bold">new set of Terms & Conditions</strong>{" "}
          governing the full-scale authorised operations. All clients will be
          required to review and accept the revised Terms & Conditions prior to
          continuing any services.
        </p>
      </div>
    </div>
  );
}
