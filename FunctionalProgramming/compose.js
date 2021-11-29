const compose = (...args) => args.reduceRight((p, c) => c(p))
