package secretcategoryservice

import (
	"github.com/duke-git/lancet/v2/slice"
	"strings"
)

func ParseChainIds(chain string) []string {
	chainIds := strings.Split(chain, "-")
	return slice.Filter(chainIds, func(index int, item string) bool {
		return item != "" && item != "-"
	})
}
