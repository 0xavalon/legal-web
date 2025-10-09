interface DisclaimerProps {
  variant?: "yellow" | "red";
}

export default function Disclaimer({ variant = "yellow" }: DisclaimerProps) {
  const isYellow = variant === "yellow";
  const isRed = variant === "red";

  const containerClasses = isYellow
    ? "bg-yellow-50 dark:bg-yellow-900/20"
    : "bg-red-50 dark:bg-red-900/30";

  const titleClasses = isYellow
    ? "text-yellow-900 dark:text-yellow-200"
    : "text-red-900 dark:text-red-100";

  const textClasses = isYellow
    ? "text-yellow-800 dark:text-yellow-100"
    : "text-red-800 dark:text-red-100";

  return (
    <div className={`${containerClasses} rounded-lg p-6`}>
      <h2 className={`text-lg font-semibold ${titleClasses} mb-4`}>
        Disclaimer
      </h2>
      <div className={`text-sm ${textClasses} space-y-3`}>
        <p>
          <strong>(i)</strong> The Licence held by{" "}
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
          <strong>(ii)</strong> As the Licence is restricted to testing, certain
          <strong className="font-bold">
            standard regulatory requirements and client protections may not
            apply
          </strong>
          during this phase. Participants in the testing environment acknowledge
          that they may have{" "}
          <strong className="font-bold">reduced rights</strong> and{" "}
          <strong className="font-bold">may not be fully compensated</strong>{" "}
          for any losses incurred as part of the testing activities.
        </p>
        <p>
          <strong>(iii)</strong> The Firm will{" "}
          <strong className="font-bold">
            not undertake or process any financial transactions
          </strong>{" "}
          until a designated{" "}
          <strong className="font-bold">Client Money Account</strong> has been
          opened and approved, as per the DFSA Testing Plan.
        </p>
        <p>
          <strong>(iv)</strong> Upon completion of the testing phase and{" "}
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
