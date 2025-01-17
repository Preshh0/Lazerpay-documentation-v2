import classNames from "classnames";
import CodeBlock from "components/CodeBlock";
import LzButton from "components/UI/Button";
import Styles from './index.module.scss';

export default function AcceptPayments():JSX.Element {

    return (
        <section className={classNames(Styles.AcceptPayments, "flex flex-col lg:flex-row w-full lg:space-y-0 lg:space-x-6")}>
            <div className="flex flex-col justify-between px-6 pt-8 pb-4 md:pt-14 rounded-t-8 lg:rounded-8 lg:w-52">
                <div className="!pr-8 mb-8 lg:mb-0">
                    <h3 className="heading-6-s whitespace-nowrap">To get started</h3>
                    <p className="mt-5 paragraph-1">Authenticate all Lazerpay API calls using your secret keys.</p>
                </div>
                <LzButton className="w-full mt-24 paragraph-1 md:mt-0" size="md" rightIcon={'chevron'}>
                    Let's go
                </LzButton>
            </div>
            <div className="max-w-lg xl:max-w-xl xl:w-4/6 bg-pri-50">
                <CodeBlock id="api" />
            </div>
        </section>
    )
}