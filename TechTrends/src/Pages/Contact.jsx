import React from 'react'

const Contact = () => {
    return (
        <main className="relative z-10 flex-grow flex flex-col items-center justify-start py-8 px-4 sm:px-10 text-white">
            {/* Background mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-[1100px] flex flex-col gap-8 relative z-10">
                {/* Heading */}
                <div className="flex flex-col gap-2 pt-4">

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        We're here to help
                    </h1>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT — Form */}
                    <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                            <p className="text-text-muted">
                                Lorem ipsum dolor sit amet — response within 24 hours.
                            </p>
                        </div>

                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row gap-5">
                                <label className="flex flex-col flex-1 gap-2">
                                    <span className="text-sm font-medium">First Name</span>
                                    <input
                                        className="w-full rounded-lg bg-surface-dark/50 border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4"
                                        placeholder="John"
                                    />
                                </label>

                                <label className="flex flex-col flex-1 gap-2">
                                    <span className="text-sm font-medium">Last Name</span>
                                    <input
                                        className="w-full rounded-lg bg-surface-dark/50 border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4"
                                        placeholder="Doe"
                                    />
                                </label>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <label className="flex flex-col flex-1 gap-2">
                                    <span className="text-sm font-medium">Email Address</span>
                                    <input
                                        type="email"
                                        className="w-full rounded-lg bg-surface-dark/50 border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4"
                                        placeholder="lorem@ipsum.com"
                                    />
                                </label>

                                <label className="flex flex-col flex-1 gap-2">
                                    <span className="text-sm font-medium">
                                        Reference ID (Optional)
                                    </span>
                                    <input
                                        className="w-full rounded-lg bg-surface-dark/50 border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4"
                                        placeholder="#ABC-000"
                                    />
                                </label>
                            </div>


                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium">Message</span>
                                <textarea
                                    className="w-full rounded-lg bg-surface-dark/50 border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 min-h-[160px]"
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                                />
                            </label>

                            <button
                                type="button"
                                className="bg-primary hover:bg-primary/90 font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <span>Send Message</span>
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </form>
                    </div>

                    {/* RIGHT — Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Live Chat */}
                        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-surface-dark to-background-dark p-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-[80px] text-primary">
                                    forum
                                </span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                                <span className="text-primary font-bold text-sm uppercase">
                                    Agents Online
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">Need faster help?</h3>
                            <p className="text-text-muted text-sm mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quick
                                response available.
                            </p>

                            <button className="w-full py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold text-sm flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">
                                    chat_bubble
                                </span>
                                Start Live Chat
                            </button>
                        </div>

                        {/* Office Card */}
                        <div className="rounded-2xl border border-border-dark bg-surface-dark overflow-hidden flex flex-col">
                            <div className="relative h-48 w-full bg-surface-dark">
                                <div className="absolute inset-0 bg-[url('https://picsum.photos/800')] bg-cover bg-center opacity-60" />
                            </div>

                            <div className="p-6 flex flex-col gap-4">
                                <h3 className="text-lg font-bold">Our Offices</h3>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">
                                            business
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Lorem Ipsum Hub</h4>
                                        <p className="text-text-muted text-sm mt-1">
                                            123 Lorem Street
                                            <br />
                                            Ipsum City, XX 00000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <p className="text-text-muted text-sm mt-1">
                                            +00 0000 000000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-primary text-sm mt-1">
                                            lorem@ipsum.test
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help Link */}
                        <div className="p-4 rounded-xl border border-border-dark hover:border-primary/50 bg-surface-dark transition-all group cursor-pointer">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">
                                        help_center
                                    </span>
                                    <span className="font-medium">Visit Help Center</span>
                                </div>
                                <span className="material-symbols-outlined text-text-muted group-hover:translate-x-1 transition-transform">
                                    chevron_right
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact

