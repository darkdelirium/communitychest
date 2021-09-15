from chia.types.blockchain_format.coin import Coin
from chia.types.blockchain_format.sized_bytes import bytes32
from chia.types.blockchain_format.program import Program
from chia.types.condition_opcodes import ConditionOpcode
from chia.util.ints import uint64
from chia.util.hash import std_hash

from clvm.casts import int_to_bytes

from cdv.util.load_clvm import load_clvm

COMMUNITYCHEST_MOD = load_clvm("communitychest.clsp","communitychest")

def create_communitychest_puzzle(amount, cash_out_puzhash):
    return COMMUNITYCHEST_MOD.curry(amount, cash_out_puzhash)

def solution_for_communitychest(ch_coin, contribution_amount):
    return Program.to([ch_coin.amount, (ch_coin.amount + contribution_amount), ch_coin.puzzle_hash])

def communitychest_announcement_assertion(ch_coin, contribution_amount):
    return [ConditionOpcode.ASSERT_COIN_ANNOUNCEMENT, std_hash(ch_coin.name() + int_to_bytes((ch_coin.amount + contribution_amount)))]
